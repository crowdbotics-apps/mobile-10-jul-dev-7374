# Generated by Django 2.2.14 on 2020-07-10 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='customtext',
            name='test',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
