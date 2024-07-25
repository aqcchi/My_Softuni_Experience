import os
import django


# Set up Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "orm_skeleton.settings")
django.setup()

# Import your models
from main_app.models import Product, Category, Customer, Order, OrderProduct, ProductManager
from decimal import Decimal
from django.db.models import Sum, Q, F


# Create and run queries
def add_records_to_database():
    # Categories
    food_category = Category.objects.create(name='Food')
    drinks_category = (Category.objects.create(name='Drinks'))

    # Food
    product1 = Product.objects.create(name='Pizza', description='Delicious pizza with toppings', price=10.99, category=food_category, is_available=False)
    product2 = Product.objects.create(name='Burger', description='Classic burger with cheese and fries', price=7.99, category=food_category, is_available=False)
    product3 = Product.objects.create(name='Apples', description='A bag of juicy red apples', price=3.99, category=food_category, is_available=True)
    product4 = Product.objects.create(name='Bread', description='A freshly baked loaf of bread', price=2.49, category=food_category, is_available=True)
    product5 = Product.objects.create(name='Pasta and Sauce Bundle', description='Package containing pasta and a jar of pasta sauce', price=6.99, category=food_category, is_available=False)
    product6 = Product.objects.create(name='Tomatoes', description='A bundle of ripe, red tomatoes', price=2.99, category=food_category, is_available=True)
    product7 = Product.objects.create(name='Carton of Eggs', description='A carton containing a dozen fresh eggs', price=3.49, category=food_category, is_available=True)
    product8 = Product.objects.create(name='Cheddar Cheese', description='A block of aged cheddar cheese', price=7.99, category=food_category, is_available=False)
    product9 = Product.objects.create(name='Milk', description='A gallon of fresh cow milk', price=3.49, category=food_category, is_available=True)

    # Drinks
    product10 = Product.objects.create(name='Coca Cola', description='Refreshing cola drink', price=1.99, category=drinks_category, is_available=True)
    product11 = Product.objects.create(name='Orange Juice', description='Freshly squeezed orange juice', price=2.49, category=drinks_category, is_available=False)
    product12 = Product.objects.create(name='Bottled Water', description='A 12-pack of purified bottled water', price=4.99, category=drinks_category, is_available=True)
    product13 = Product.objects.create(name='Orange Soda', description='A 6-pack of carbonated orange soda', price=5.49, category=drinks_category, is_available=True)
    product14 = Product.objects.create(name='Bottled Green Tea', description='A bottled green tea', price=3.99, category=drinks_category, is_available=False)
    product15 = Product.objects.create(name='Beer', description='A bottled craft beer', price=5.49, category=drinks_category, is_available=True)

    # Customers
    customer1 = Customer.objects.create(username='john_doe')
    customer2 = Customer.objects.create(username='alex_alex')
    customer3 = Customer.objects.create(username='peter132')
    customer4 = Customer.objects.create(username='k.k.')
    customer5 = Customer.objects.create(username='peter_smith')

    # Orders
    order1 = Order.objects.create(customer=customer1)
    order_product1 = OrderProduct.objects.create(order=order1, product=product3, quantity=2)
    order_product2 = OrderProduct.objects.create(order=order1, product=product6, quantity=1)
    order_product3 = OrderProduct.objects.create(order=order1, product=product7, quantity=5)
    order_product4 = OrderProduct.objects.create(order=order1, product=product13, quantity=1)

    order2 = Order.objects.create(customer=customer3)
    order_product5 = OrderProduct.objects.create(order=order2, product=product3, quantity=2)
    order_product6 = OrderProduct.objects.create(order=order2, product=product9, quantity=1)

    order3 = Order.objects.create(customer=customer1)
    order_product5 = OrderProduct.objects.create(order=order3, product=product12, quantity=4)
    order_product6 = OrderProduct.objects.create(order=order3, product=product7, quantity=3)
    return "All data entered!"


# print(add_records_to_database())

def product_quantity_ordered():
    total_products_ordered = (Product.objects.annotate(total_ordered_quantity=Sum('orderproduct__quantity'))
                              .exclude(total_ordered_quantity=None)
                              .order_by('-total_ordered_quantity'))
    product_list = []
    for product in total_products_ordered:
        product_list.append(f"Quantity ordered of {product.name}: {product.total_ordered_quantity}")

    return '\n'.join(product_list)


def ordered_products_per_customer():
    orders = Order.objects.prefetch_related('orderproduct_set__product__category').order_by('id')

    order_info = []
    for order in orders:
        order_info.append(f"Order ID: {order.id}, Customer: {order.customer.username}")
        for ordered_product in order.orderproduct_set.all():
            order_info.append(f"- Product: {ordered_product.product.name},"
                              f" Category: {ordered_product.product.category.name}")

    return '\n'.join(order_info)


def filter_products():
    wanted_products = Product.objects.filter(is_available=True, price__gt=3.00).order_by("-price", "name")

    products_list = []
    for product in wanted_products:
        products_list.append(f"{product.name}: {product.price}lv.")

    return '\n'.join(products_list)


def give_discount():
    query = Q(is_available=True) & Q(price__gt=3.00)
    product_to_be_discounted = Product.objects.filter(query)
    product_to_be_discounted.update(price=F("price") * 0.7)
    available_products = Product.objects.filter(is_available=True).order_by("-price", "name")
    result = []
    for p in available_products:
        result.append(f'{p.name}: {p.price}lv.')

    return '\n'.join(result)

    # products_for_discount = Product.objects.filter(is_available=True, price__gt=3.00).order_by("-price", "name")
    #
    # discounted_products = []
    # for product in products_for_discount:
    #     discounted_price = product.price * Decimal(0.70)
    #     discounted_products.append(f"{product.name}: {discounted_price:.2f}lv.")
    #
    # return '\n'.join(discounted_products)


print(give_discount())

