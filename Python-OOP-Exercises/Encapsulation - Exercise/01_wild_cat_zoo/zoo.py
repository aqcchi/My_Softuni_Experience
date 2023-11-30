from typing import List

from project.animal import Animal
from project.worker import Worker


class Zoo:

    def __init__(self, name: str, budget: int, animal_capacity: int, workers_capacity: int):
        self.name = name
        self.__budget = budget
        self.__animal_capacity = animal_capacity
        self.__workers_capacity = workers_capacity
        self.animals: List[Animal] = []
        self.workers: List[Worker] = []

    def add_animal(self, animal: Animal, price) -> str:
        if self.__animal_capacity <= len(self.animals):
            return "Not enough space for animal"
        if self.__budget < price:
            return "Not enough budget"
        self.__budget -= price
        self.animals.append(animal)
        return f"{animal.name} the {animal.__class__.__name__} added to the zoo"

    def hire_worker(self, worker) -> str:
        if len(self.workers) < self.__workers_capacity:
            self.workers.append(worker)
            return f"{worker.name} the {worker.__class__.__name__} hired successfully"
        return "Not enough space for worker"

    def fire_worker(self, worker_name) -> str:
        for worker in self.workers:
            if worker.name == worker_name:
                self.workers.remove(worker)
                return f"{worker_name} fired successfully"
        return f"There is no {worker_name} in the zoo"

    def pay_workers(self) -> str:
        sum_salaries = 0
        for worker in self.workers:
            sum_salaries += worker.salary
        if self.__budget >= sum_salaries:
            self.__budget -= sum_salaries
            return f"You payed your workers. They are happy. Budget left: {self.__budget}"
        return "You have no budget to pay your workers. They are unhappy"

    def tend_animals(self) -> str:
        sum_care_money = 0
        for animal in self.animals:
            sum_care_money += animal.money_for_care
        if self.__budget >= sum_care_money:
            self.__budget -= sum_care_money
            return f"You tended all the animals. They are happy. Budget left: {self.__budget}"
        return "You have no budget to tend the animals. They are unhappy."

    def profit(self, amount) -> None:
        self.__budget += amount

    def animals_status(self) -> str:
        lions = []
        tigers = []
        cheetahs = []
        for animal in self.animals:
            if animal.__class__.__name__ == "Lion":
                lions.append(repr(animal))
            elif animal.__class__.__name__ == "Tiger":
                tigers.append(repr(animal))
            else:
                cheetahs.append(repr(animal))

        animals_data = [f"You have {len(self.animals)} animals", f"----- {len(lions)} Lions:"]
        animals_data.extend(lions)
        animals_data.append(f"----- {len(tigers)} Tigers:")
        animals_data.extend(tigers)
        animals_data.append(f"----- {len(cheetahs)} Cheetahs:")
        animals_data.extend(cheetahs)

        return '\n'.join(animals_data)

    def workers_status(self) -> str:
        keepers = []
        caretakers = []
        vets = []
        for worker in self.workers:
            if worker.__class__.__name__ == "Keeper":
                keepers.append(repr(worker))
            elif worker.__class__.__name__ == "Caretaker":
                caretakers.append(repr(worker))
            else:
                vets.append(repr(worker))

        workers_data = [f"You have {len(self.workers)} workers", f"----- {len(keepers)} Keepers:"]
        workers_data.extend(keepers)
        workers_data.append(f"----- {len(caretakers)} Caretakers:")
        workers_data.extend(caretakers)
        workers_data.append(f"----- {len(vets)} Vets:")
        workers_data.extend(vets)

        return '\n'.join(workers_data)