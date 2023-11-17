from abc import abstractmethod

from project.animals.animal import Bird
from project.food import Food


class Owl(Bird):

    EATS_FOOD = ["Meat"]
    WEIGHT_INCREMENT = 0.25

    def make_sound(self):
        return "Hoot Hoot"


class Hen(Bird):

    EATS_FOOD = ["Vegetable", "Fruit", "Meat", "Seed"]
    WEIGHT_INCREMENT = 0.35

    def make_sound(self):
        return "Cluck"

