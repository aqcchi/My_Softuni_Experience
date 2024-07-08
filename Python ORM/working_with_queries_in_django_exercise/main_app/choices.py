from django.db import models


class LaptopBrand(models.TextChoices):
    ASUS = 'Asus', 'Asus'
    APPLE = 'Apple', 'Apple'
    LENOVO = 'Lenovo', 'Lenovo'
    DELL = 'Dell', 'Dell'


class OperationSystem(models.TextChoices):
    WINDOWS = 'Windows', 'Windows'
    MACOS = 'MacOS', 'MacOS'
    LINUX = 'Linux', 'Linux'
    CHROME_OS = 'Chrome OS', 'Chrome OS'


class MealType(models.TextChoices):
    BREAKFAST = 'Breakfast', 'Breakfast'
    LUNCH = 'Lunch', 'Lunch'
    DINNER = 'Dinner', 'Dinner'
    SNACK = 'Snack', 'Snack'


class DifficultyChoices(models.TextChoices):
    EASY = 'Easy', 'Easy'
    MEDIUM = 'Medium', 'Medium'
    HARD = 'Hard', 'Hard'


class WorkoutType(models.TextChoices):
    CARDIO = 'Cardio', 'Cardio'
    STRENGTH = 'Strength', 'Strength'
    YOGA = 'Yoga', 'Yoga'
    CROSSFIT = 'CrossFit', 'CrossFit'
    CALISTHENICS = 'Calisthenics', 'Calisthenics'
