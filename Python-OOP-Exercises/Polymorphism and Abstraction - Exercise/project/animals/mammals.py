from abc import abstractmethod

from project.animals.animal import Mammal
from project.food import Food


class Mouse(Mammal):

    EATS_FOOD = ["Vegetable", "Fruit"]
    WEIGHT_INCREMENT = 0.10

    def make_sound(self):
        return "Squeak"


class Dog(Mammal):

    EATS_FOOD = ["Meat"]
    WEIGHT_INCREMENT = 0.40

    def make_sound(self):
        return "Woof!"


class Cat(Mammal):

    EATS_FOOD = ["Vegetable", "Meat"]
    WEIGHT_INCREMENT = 0.30

    def make_sound(self):
        return "Meow"


class Tiger(Mammal):

    EATS_FOOD = ["Meat"]
    WEIGHT_INCREMENT = 1.00

    def make_sound(self):
        return "ROAR!!!"
