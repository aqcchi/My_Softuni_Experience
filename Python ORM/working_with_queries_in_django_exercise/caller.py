import os
from typing import List

import django

from main_app.choices import MealType, DifficultyChoices, WorkoutType

# Set up Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "orm_skeleton.settings")
django.setup()

from helpers import populate_model_with_data
from main_app.models import ArtworkGallery, Laptop, ChessPlayer, Meal, Dungeon, Workout


# populate_model_with_data(ArtworkGallery)

# Import your models
# Create and check models
# Run and print your queries


def show_highest_rated_art():
    best_artwork = ArtworkGallery.objects.order_by('-rating', 'id').first()

    return f"{best_artwork.art_name} is the highest-rated art with a {best_artwork.rating} rating!"


def bulk_create_arts(first_art: ArtworkGallery, second_art: ArtworkGallery):
    ArtworkGallery.objects.bulk_create([
        first_art,
        second_art
    ])


def delete_negative_rated_arts():
    ArtworkGallery.objects.filter(rating__lt=0).delete()


# artwork1 = ArtworkGallery(artist_name='Vincent van Gogh', art_name='Starry Night', rating=4, price=1200000.0)
# artwork2 = ArtworkGallery(artist_name='Leonardo da Vinci', art_name='Mona Lisa', rating=5, price=1500000.0)
#
# # Bulk saves the instances
# bulk_create_arts(artwork1, artwork2)
# print(show_highest_rated_art())
# print(ArtworkGallery.objects.all())


def show_the_most_expensive_laptop():
    priciest_laptop = Laptop.objects.order_by('-price', '-id').first()

    return f"{priciest_laptop.brand} is the most expensive laptop available for {priciest_laptop.price}$!"


def bulk_create_laptops(args: List[Laptop]):
    Laptop.objects.bulk_create(args)


def update_to_512_GB_storage():
    Laptop.objects.filter(brand__in=['Asus', 'Lenovo']).update(storage=512)


def update_to_16_GB_memory():
    Laptop.objects.filter(brand__in=["Apple", "Dell", "Acer"]).update(memory=16)


def update_operation_systems():
    Laptop.objects.filter(brand__exact="Asus").update(operation_system="Windows")
    Laptop.objects.filter(brand__exact="Apple").update(operation_system="MacOS")
    Laptop.objects.filter(brand__in=["Dell", "Acer"]).update(operation_system="Linux")
    Laptop.objects.filter(brand__exact="Lenovo").update(operation_system="Chrome OS")


def delete_inexpensive_laptops():
    Laptop.objects.filter(price__lt=1200).delete()


# check solution


def bulk_create_chess_players(args: List[ChessPlayer]):
    ChessPlayer.objects.bulk_create(args)


def delete_chess_players():
    ChessPlayer.objects.filter(title="no title").delete()


def change_chess_games_won():
    ChessPlayer.objects.filter(title="GM").update(games_won=30)


def change_chess_games_lost():
    ChessPlayer.objects.filter(title="no title").update(games_lost=25)


def change_chess_games_drawn():
    ChessPlayer.objects.update(games_drawn=10)


def grand_chess_title_GM():
    ChessPlayer.objects.filter(rating__gte=2400).update(title="GM")


def grand_chess_title_IM():
    ChessPlayer.objects.filter(rating__range=[2300, 2399]).update(title="IM")


def grand_chess_title_FM():
    ChessPlayer.objects.filter(rating__range=[2200, 2299]).update(title="FM")


def grand_chess_title_regular_player():
    ChessPlayer.objects.filter(rating__range=[0, 2199]).update(title="regular player")


# player1 = ChessPlayer(
#     username='Player1',
#     title='no title',
#     rating=2200,
#     games_played=50,
#     games_won=20,
#     games_lost=25,
#     games_drawn=5,
# )
# player2 = ChessPlayer(
#     username='Player2',
#     title='IM',
#     rating=2350,
#     games_played=80,
#     games_won=40,
#     games_lost=25,
#     games_drawn=15,
# )
#
# # Call the bulk_create_chess_players function
# bulk_create_chess_players([player1, player2])

# Call the delete_chess_players function
# delete_chess_players()
#
# # Check that the players are deleted
# print("Number of Chess Players after deletion:", ChessPlayer.objects.count())


def set_new_chefs():
    Meal.objects.filter(meal_type=MealType.BREAKFAST).update(chef="Gordon Ramsay")
    Meal.objects.filter(meal_type=MealType.LUNCH).update(chef="Julia Child")
    Meal.objects.filter(meal_type=MealType.DINNER).update(chef="Jamie Oliver")
    Meal.objects.filter(meal_type=MealType.SNACK).update(chef="Thomas Keller")


def set_new_preparation_times():
    Meal.objects.filter(meal_type=MealType.BREAKFAST).update(preparation_time="10 minutes")
    Meal.objects.filter(meal_type=MealType.LUNCH).update(preparation_time="12 minutes")
    Meal.objects.filter(meal_type=MealType.DINNER).update(preparation_time="15 minutes")
    Meal.objects.filter(meal_type=MealType.SNACK).update(preparation_time="5 minutes")


def update_low_calorie_meals():
    Meal.objects.filter(meal_type__in=[MealType.BREAKFAST, MealType.DINNER]).update(calories=400)


def update_high_calorie_meals():
    Meal.objects.filter(meal_type__in=[MealType.LUNCH, MealType.SNACK]).update(calories=700)


def delete_lunch_and_snack_meals():
    Meal.objects.filter(meal_type__in=[MealType.LUNCH, MealType.SNACK]).delete()


# 5.Dungeon

def show_hard_dungeons():
    hard_dungeons = Dungeon.objects.filter(difficulty="Hard").order_by("-location")
    dungeons_list = [str(dungeon) for dungeon in hard_dungeons]
    return '\n'.join(dungeons_list)


def bulk_create_dungeons(args: List[Dungeon]):
    Dungeon.objects.bulk_create(args)


def update_dungeon_names():
    Dungeon.objects.filter(difficulty=DifficultyChoices.EASY).update(name="The Erased Thombs")
    Dungeon.objects.filter(difficulty=DifficultyChoices.MEDIUM).update(name="The Coral Labyrinth")
    Dungeon.objects.filter(difficulty=DifficultyChoices.HARD).update(name="The Lost Haunt")


def update_dungeon_bosses_health():
    Dungeon.objects.exclude(difficulty=DifficultyChoices.EASY).update(boss_health=500)


def update_dungeon_recommended_levels():
    Dungeon.objects.filter(difficulty=DifficultyChoices.EASY).update(recommended_level=25)
    Dungeon.objects.filter(difficulty=DifficultyChoices.MEDIUM).update(recommended_level=50)
    Dungeon.objects.filter(difficulty=DifficultyChoices.HARD).update(recommended_level=75)


def update_dungeon_rewards():
    Dungeon.objects.filter(boss_health=500).update(reward="1000 Gold")
    Dungeon.objects.filter(location__startswith='E').update(reward="New dungeon unlocked")
    Dungeon.objects.filter(location__endswith='s').update(reward="Dragonheart Amulet")


def set_new_locations():
    Dungeon.objects.filter(recommended_level=25).update(location="Enchanted Maze")
    Dungeon.objects.filter(recommended_level=50).update(location="Grimstone Mines")
    Dungeon.objects.filter(recommended_level=75).update(location="Shadowed Abyss")


# Create two instances
# dungeon1 = Dungeon(
#     name="Dungeon 1",
#     boss_name="Boss 1",
#     boss_health=1000,
#     recommended_level=75,
#     reward="Gold",
#     location="Eternal Hell",
#     difficulty="Hard",
# )
#
# dungeon2 = Dungeon(
#     name="Dungeon 2",
#     boss_name="Boss 2",
#     boss_health=400,
#     recommended_level=25,
#     reward="Experience",
#     location="Crystal Caverns",
#     difficulty="Easy",
# )
#
# # Bulk save the instances
# bulk_create_dungeons([dungeon1, dungeon2])
#
# # Update boss's health
# update_dungeon_bosses_health()
#
# # Show hard dungeons
# hard_dungeons_info = show_hard_dungeons()
# print(hard_dungeons_info)
#
# # Change dungeon names based on difficulty
# update_dungeon_names()
# dungeons = Dungeon.objects.order_by('boss_health')
# print(dungeons[0].name)
# print(dungeons[1].name)
#
# # Change the dungeon rewards
# update_dungeon_rewards()
# dungeons = Dungeon.objects.order_by('boss_health')
# print(dungeons[0].reward)
# print(dungeons[1].reward)


# 6.Workout

def show_workouts():
    wanted_workouts = Workout.objects.filter(workout_type__in=["Calisthenics", "CrossFit"])
    workout_list = [str(workout) for workout in wanted_workouts]
    return '\n'.join(workout_list)


def get_high_difficulty_cardio_workouts():
    return Workout.objects.filter(workout_type="Cardio", difficulty="High").order_by("instructor")


def set_new_instructors():
    Workout.objects.filter(workout_type=WorkoutType.CARDIO).update(instructor="John Smith")
    Workout.objects.filter(workout_type=WorkoutType.STRENGTH).update(instructor="Michael Williams")
    Workout.objects.filter(workout_type=WorkoutType.YOGA).update(instructor="Emily Johnson")
    Workout.objects.filter(workout_type=WorkoutType.CROSSFIT).update(instructor="Sarah Davis")
    Workout.objects.filter(workout_type=WorkoutType.CALISTHENICS).update(instructor="Chris Heria")


def set_new_duration_times():
    Workout.objects.filter(instructor="John Smith").update(duration="15 minutes")
    Workout.objects.filter(instructor="Sarah Davis").update(duration="30 minutes")
    Workout.objects.filter(instructor="Chris Heria").update(duration="45 minutes")
    Workout.objects.filter(instructor="Michael Williams").update(duration="1 hour")
    Workout.objects.filter(instructor="Emily Johnson").update(duration="1 hour and 30 minutes")


def delete_workouts():
    Workout.objects.exclude(workout_type__in=[WorkoutType.STRENGTH, WorkoutType.CALISTHENICS]).delete()


# Create two Workout instances
# workout1 = Workout.objects.create(
#     name="Push-Ups",
#     workout_type="Calisthenics",
#     duration="10 minutes",
#     difficulty="Intermediate",
#     calories_burned=200,
#     instructor="Bob"
# )
#
# workout2 = Workout.objects.create(
#     name="Running",
#     workout_type="Cardio",
#     duration="30 minutes",
#     difficulty="High",
#     calories_burned=400,
#     instructor="Lilly"
# )
#
# # Run the functions
# print(show_workouts())
#
# high_difficulty_cardio_workouts = get_high_difficulty_cardio_workouts()
# for workout in high_difficulty_cardio_workouts:
#     print(f"{workout.name} by {workout.instructor}")
#
# set_new_instructors()
# for workout in Workout.objects.all():
#     print(f"Instructor: {workout.instructor}")
#
# set_new_duration_times()
# for workout in Workout.objects.all():
#     print(f"Duration: {workout.duration}")
