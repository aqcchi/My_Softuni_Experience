# Generated by Django 5.0.4 on 2024-07-14 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_veterinarian_zookeeper'),
    ]

    operations = [
        migrations.CreateModel(
            name='ZooDisplayAnimal',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('main_app.animal',),
        ),
    ]
