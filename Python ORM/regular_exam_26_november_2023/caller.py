import os
import django

# Set up Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "orm_skeleton.settings")
django.setup()

# Import your models here
from django.db.models import Q, Count, Avg
from main_app.models import Author, Article


# Create queries within functions
def get_authors(search_name=None, search_email=None):

    if search_name is None and search_email is None:
        return ''

    matching_authors = Author.objects.none()

    if search_name is not None and search_email is not None:
        matching_authors = Author.objects.filter(
            Q(full_name__icontains=search_name)
            &
            Q(email__icontains=search_email)
        )
    elif search_email is None:
        matching_authors = Author.objects.filter(full_name__icontains=search_name)
    elif search_name is None:
        matching_authors = Author.objects.filter(email__icontains=search_email)

    if not matching_authors.exists():
        return ''

    final_authors = matching_authors.order_by('-full_name')

    authors_list = []

    for a in final_authors:
        authors_list.append(f"Author: {a.full_name}, email: {a.email}, status: {'Banned' if a.is_banned else 'Not Banned'}")

    return '\n'.join(authors_list)


def get_top_publisher():
    top_author = Author.objects.get_authors_by_article_count().first()

    if not top_author or top_author.article_set.count() == 0:
        return ''

    return f"Top Author: {top_author.full_name} with {top_author.article_set.count()} published articles."


def get_top_reviewer():
    most_reviews_author = (((Author.objects.prefetch_related('reviews')
                           .annotate(reviews_count=Count('reviews')))
                           .order_by('-reviews_count', 'email'))
                           .first())

    if not most_reviews_author or most_reviews_author.reviews_count == 0:
        return ''

    return f"Top Reviewer: {most_reviews_author.full_name} with {most_reviews_author.reviews_count} published reviews."


def get_latest_article():
    latest_article = (Article.objects.prefetch_related('authors', 'article_reviews')
                      .annotate(rating_avg=Avg('article_reviews__rating'))
                      .order_by('-published_on')
                      .first())

    if latest_article is None:
        return ''

    authors_list = [a.full_name for a in latest_article.authors.all().order_by('full_name')]
    authors = ', '.join(authors_list)

    rating_avg = latest_article.rating_avg if latest_article.rating_avg is not None else 0.00

    return (f"The latest article is: {latest_article.title}."
            f" Authors: {authors}. "
            f"Reviewed: {latest_article.article_reviews.count()} times. "
            f"Average Rating: {rating_avg:.2f}.")


def get_top_rated_article():
    top_rated_article = (Article.objects.prefetch_related('article_reviews')
                         .annotate(ratings_count=Count('article_reviews__rating'),
                                   rating_avg=Avg('article_reviews__rating'))
                         .order_by('-rating_avg', 'title')
                         .first())

    if top_rated_article is None or not top_rated_article.article_reviews.exists():
        return ''

    return (f"The top-rated article is: {top_rated_article.title},"
            f" with an average rating of {top_rated_article.rating_avg:.2f},"
            f" reviewed {top_rated_article.ratings_count} times.")


def ban_author(email=None):

    if email is None:
        return "No authors banned."

    banned_authors = (Author.objects.filter(email=email)
                     .annotate(reviews_count=Count('reviews')))

    if not banned_authors.exists():
        return "No authors banned."

    banned_author = banned_authors.first()
    banned_author.is_banned = True
    banned_author.save()

    reviews_num = banned_author.reviews.count()
    banned_author.reviews.all().delete()

    return (f"Author: {banned_author.full_name} is banned!"
            f" {reviews_num} reviews deleted.")



