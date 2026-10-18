from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = "home/index.html"
    extra_context = {"active_nav": "home"}


class ListingsView(TemplateView):
    template_name = "home/listings.html"
    extra_context = {"active_nav": "buy"}


class PropertyView(TemplateView):
    template_name = "home/property.html"
    extra_context = {"active_nav": "buy"}


class AgentView(TemplateView):
    template_name = "home/agent.html"
    extra_context = {"active_nav": "about"}


class ContactView(TemplateView):
    template_name = "home/contact.html"
    extra_context = {"active_nav": "contact"}


class NeighbourhoodsView(TemplateView):
    template_name = "home/neighbourhoods.html"
    extra_context = {"active_nav": "neighbourhoods"}


class ServicesView(TemplateView):
    template_name = "home/services.html"
    extra_context = {"active_nav": "services"}


class PrivacyView(TemplateView):
    template_name = "home/privacy.html"
    extra_context = {"active_nav": ""}


class TermsView(TemplateView):
    template_name = "home/terms.html"
    extra_context = {"active_nav": ""}


# Buy pages

class BuyView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "buy",
        "page_kicker": "Buy",
        "page_title": "Property for sale",
        "page_description": "Browse residential properties for sale across Nairobi’s western and northern suburbs — Karen, Runda, Muthaiga, Lavington and beyond.",
    }


class BuyDevelopmentsView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "buy",
        "page_kicker": "Buy · New developments",
        "page_title": "New build developments",
        "page_description": "Off-plan and newly completed homes in Nairobi’s most sought-after neighbourhoods. Secure early pricing and choose your finishes.",
    }


class BuyCommercialView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "buy",
        "page_kicker": "Buy · Commercial",
        "page_title": "Commercial property",
        "page_description": "Office blocks, retail units and mixed-use buildings for sale in Westlands, Upper Hill and the CBD.",
    }


class BuyLandView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "buy",
        "page_kicker": "Buy · Land",
        "page_title": "Vacant land",
        "page_description": "Residential and commercial plots across greater Nairobi, with title searches and survey coordination included.",
    }


# Rent pages

class RentView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "rent",
        "page_kicker": "Rent",
        "page_title": "Property to rent",
        "page_description": "Houses, apartments and commercial spaces available to let in Nairobi’s best suburbs.",
    }


class RentHousesView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "rent",
        "page_kicker": "Rent · Houses",
        "page_title": "Houses for rent",
        "page_description": "Standalone family homes for rent in Karen, Runda, Muthaiga, Lavington and surrounding areas.",
    }


class RentApartmentsView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "rent",
        "page_kicker": "Rent · Apartments",
        "page_title": "Apartments & flats",
        "page_description": "Modern apartments and penthouse units for rent in Westlands, Kilimani, Kileleshwa and Lavington.",
    }


class RentCommercialView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "rent",
        "page_kicker": "Rent · Commercial",
        "page_title": "Commercial to let",
        "page_description": "Offices, retail spaces and warehouses available for lease across Nairobi.",
    }


# Services sub-pages

class ServicesSalesView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "services",
        "page_kicker": "Services · Residential",
        "page_title": "Residential sales",
        "page_description": "From pricing advice and professional photography to negotiation and completion — we manage the entire sale of your home.",
        "page_features": [
            {"number": "01", "title": "Market appraisal", "text": "A written pricing opinion based on recent comparable sales in your neighbourhood."},
            {"number": "02", "title": "Marketing", "text": "Professional photography, floor plans and listing across major property portals."},
            {"number": "03", "title": "Negotiation & completion", "text": "We handle offers, coordinate advocates and land searches through to handover."},
        ],
    }


class ServicesLettingView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "services",
        "page_kicker": "Services · Residential",
        "page_title": "Residential letting",
        "page_description": "Tenant sourcing, vetting, lease preparation and move-in coordination for landlords across Nairobi.",
        "page_features": [
            {"number": "01", "title": "Tenant sourcing", "text": "We advertise your property and shortlist qualified tenants with reference checks."},
            {"number": "02", "title": "Lease preparation", "text": "Drafting tenancy agreements that protect your interests and comply with Kenyan law."},
            {"number": "03", "title": "Move-in coordination", "text": "Property inspection, inventory and handover so the tenancy starts smoothly."},
        ],
    }


class ServicesManagementView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "services",
        "page_kicker": "Services · Management",
        "page_title": "Property management",
        "page_description": "Hands-off property ownership — rent collection, maintenance, tenant relations and monthly reporting.",
        "page_features": [
            {"number": "01", "title": "Rent collection", "text": "We collect rent on time and follow up on arrears so you don’t have to."},
            {"number": "02", "title": "Maintenance", "text": "Coordinating repairs and routine maintenance with vetted contractors."},
            {"number": "03", "title": "Reporting", "text": "Monthly statements and annual summaries for your records and tax returns."},
        ],
    }


class ServicesCommercialSalesView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "services",
        "page_kicker": "Services · Commercial",
        "page_title": "Commercial sales",
        "page_description": "Valuation, marketing and transaction management for office blocks, retail units and mixed-use developments.",
    }


class ServicesCommercialLeasingView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "services",
        "page_kicker": "Services · Commercial",
        "page_title": "Commercial leasing",
        "page_description": "Finding quality tenants for your commercial spaces and negotiating lease terms that work for both parties.",
    }


class ServicesAdvisoryView(TemplateView):
    template_name = "home/generic.html"
    extra_context = {
        "active_nav": "services",
        "page_kicker": "Services · Advisory",
        "page_title": "Property advisory",
        "page_description": "Independent pricing opinions, market research and investment analysis for individuals and institutions.",
    }
