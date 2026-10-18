from django.contrib.sitemaps import Sitemap
from django.urls import reverse


class StaticSitemap(Sitemap):
    protocol = "https"

    _pages = [
        ("home:index", 1.0, "daily"),
        ("home:listings", 0.9, "daily"),
        ("home:buy", 0.8, "weekly"),
        ("home:buy_developments", 0.6, "weekly"),
        ("home:buy_commercial", 0.6, "weekly"),
        ("home:buy_land", 0.6, "weekly"),
        ("home:rent", 0.8, "weekly"),
        ("home:rent_houses", 0.6, "weekly"),
        ("home:rent_apartments", 0.6, "weekly"),
        ("home:rent_commercial", 0.6, "weekly"),
        ("home:services", 0.7, "monthly"),
        ("home:services_sales", 0.5, "monthly"),
        ("home:services_letting", 0.5, "monthly"),
        ("home:services_management", 0.5, "monthly"),
        ("home:services_commercial_sales", 0.5, "monthly"),
        ("home:services_commercial_leasing", 0.5, "monthly"),
        ("home:services_advisory", 0.5, "monthly"),
        ("home:neighbourhoods", 0.7, "weekly"),
        ("home:agent", 0.6, "monthly"),
        ("home:contact", 0.7, "monthly"),
        ("home:property", 0.8, "weekly"),
        ("home:privacy", 0.3, "yearly"),
        ("home:terms", 0.3, "yearly"),
    ]

    def items(self):
        return self._pages

    def location(self, item):
        return reverse(item[0])

    def priority(self, item):
        return item[1]

    def changefreq(self, item):
        return item[2]
