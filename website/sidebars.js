/**
* Sidebar definitions for Docusaurus v2
*/

module.exports = {
    "docs": {
        "FTOS Documentation": [
            "getting-started"
        ],
        "Innovation core": [
            "innovation-core/overview"
        ],
        "FTOS Studio": [
            "studio/overview",
            {
                "type": "category",
                "label": "User Guide",
                "items": [
                    "studio/user-guide/introduction",
                    "studio/user-guide/installation",
                    {
                        "type": "category",
                        "label": "Evolutive Data Core",
                        "items": [
                            "studio/user-guide/data-model-designer",
                            "studio/user-guide/data-model-explorer",
                            "studio/user-guide/data-import-template",
                            "studio/user-guide/data-governance",
                            "studio/user-guide/rest-processors",
                            "studio/user-guide/data-pipes"
                        ]
                    },
                    {
                        "type": "category",
                        "label": "Digital Journeys",
                        "items": [
                            "studio/user-guide/form-driven-flows",
                            "studio/user-guide/form-driven-mockup-flows",
                            "studio/user-guide/custom-flows",
                            "studio/user-guide/ui-designer",
                            "studio/user-guide/custom-style-sheets",
                            "studio/user-guide/localization",
                            "studio/user-guide/code-snippets"
                        ]
                    },
                    "studio/user-guide/fintech-automation",
                    "studio/user-guide/reporting-and-analysis",
                    "studio/user-guide/digital-developer-tools",
                    "studio/user-guide/digital-touchpoints",
                    "studio/user-guide/security",
                    "studio/user-guide/devops"
                ]
            }
        ]
    },
    "tutorials": {
        "Tutorials": [
            "tutorials/overview",
            "tutorials/basic-outline",
            "tutorials/several-sidebars"
        ]
    }
}