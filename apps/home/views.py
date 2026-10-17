from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = "home/index.html"
    extra_context = {"active_nav": "home"}


class ListingsView(TemplateView):
    template_name = "home/listings.html"
    extra_context = {"active_nav": "listings"}


class PropertyView(TemplateView):
    template_name = "home/property.html"
    extra_context = {"active_nav": "listings"}


class AgentView(TemplateView):
    template_name = "home/agent.html"
    extra_context = {"active_nav": "about"}


class ContactView(TemplateView):
    template_name = "home/contact.html"
    extra_context = {"active_nav": "contact"}


class NeighbourhoodsView(TemplateView):
    template_name = "home/neighbourhoods.html"
    extra_context = {"active_nav": "neighbourhoods"}
