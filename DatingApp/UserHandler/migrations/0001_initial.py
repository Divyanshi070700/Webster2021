# Generated by Django 3.2.8 on 2021-10-20 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Details',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=30)),
                ('lastName', models.CharField(max_length=30)),
                ('gender', models.CharField(max_length=30)),
                ('dob', models.DateField()),
                ('occupation', models.CharField(max_length=30)),
                ('bio', models.CharField(max_length=100)),
                ('latitude', models.DecimalField(decimal_places=3, max_digits=6)),
                ('longitude', models.DecimalField(decimal_places=3, max_digits=6)),
            ],
        ),
    ]
