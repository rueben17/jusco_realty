from django.urls import path

from .views import (
    HomeView,
    ListingsView,
    PropertyView,
    AgentView,
    ContactView,
    NeighbourhoodsView,
    ServicesView,
    PrivacyView,
    TermsView,
    BuyView,
    BuyDevelopmentsView,
    BuyCommercialView,
    BuyLandView,
    RentView,
    RentHousesView,
    RentApartmentsView,
    RentCommercialView,
    ServicesSalesView,
    ServicesLettingView,
    ServicesManagementView,
    ServicesCommercialSalesView,
    ServicesCommercialLeasingView,
    ServicesAdvisoryView,
)

app_name = "home"

urlpatterns = [
    path("", HomeView.as_view(), name="index"),
    path("listings/", ListingsView.as_view(), name="listings"),
    path("property/", PropertyView.as_view(), name="property"),
    path("about/", AgentView.as_view(), name="agent"),
    path("contact/", ContactView.as_view(), name="contact"),
    path("neighbourhoods/", NeighbourhoodsView.as_view(), name="neighbourhoods"),
    path("services/", ServicesView.as_view(), name="services"),
    path("privacy-policy/", PrivacyView.as_view(), name="privacy"),
    path("terms/", TermsView.as_view(), name="terms"),
    # Buy
    path("buy/", BuyView.as_view(), name="buy"),
    path("buy/new-developments/", BuyDevelopmentsView.as_view(), name="buy_developments"),
    path("buy/commercial/", BuyCommercialView.as_view(), name="buy_commercial"),
    path("buy/vacant-land/", BuyLandView.as_view(), name="buy_land"),
    # Rent
    path("rent/", RentView.as_view(), name="rent"),
    path("rent/houses/", RentHousesView.as_view(), name="rent_houses"),
    path("rent/apartments/", RentApartmentsView.as_view(), name="rent_apartments"),
    path("rent/commercial/", RentCommercialView.as_view(), name="rent_commercial"),
    # Services sub-pages
    path("services/residential-sales/", ServicesSalesView.as_view(), name="services_sales"),
    path("services/residential-letting/", ServicesLettingView.as_view(), name="services_letting"),
    path("services/property-management/", ServicesManagementView.as_view(), name="services_management"),
    path("services/commercial-sales/", ServicesCommercialSalesView.as_view(), name="services_commercial_sales"),
    path("services/commercial-leasing/", ServicesCommercialLeasingView.as_view(), name="services_commercial_leasing"),
    path("services/advisory/", ServicesAdvisoryView.as_view(), name="services_advisory"),
]
