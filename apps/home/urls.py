from django.urls import path

from .views import (
    HomeView,
    ListingsView,
    PropertyView,
    AgentView,
    ContactView,
    NeighbourhoodsView,
)

app_name = "home"

urlpatterns = [
    path("", HomeView.as_view(), name="index"),
    path("listings/", ListingsView.as_view(), name="listings"),
    path("property/", PropertyView.as_view(), name="property"),
    path("about/", AgentView.as_view(), name="agent"),
    path("contact/", ContactView.as_view(), name="contact"),
    path("neighbourhoods/", NeighbourhoodsView.as_view(), name="neighbourhoods"),
]
