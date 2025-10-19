# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **college and career planning repository** designed for high school students (specifically juniors/seniors) to organize their research and decision-making process. The project consists of comprehensive markdown templates that guide students through researching colleges, majors, careers, financial planning, and timeline management.

## Repository Structure

The codebase is organized as a collection of **research templates** and **reference materials**:

```
├── README.md              # Main project overview and usage guide
├── colleges.md            # College research template (copy for each school)
├── majors.md              # Major/field of study research template
├── careers.md             # Career path research template
├── financial-planning.md  # Financial aid and cost analysis template
├── timeline-goals.md      # Timeline tracking and goal setting template
└── resources.md           # Comprehensive resource links and references
```

## Core Architecture

### Template-Based System
- **Modular Templates**: Each `.md` file is a self-contained research template
- **Copy-and-Customize Workflow**: Students duplicate templates for multiple colleges, majors, or careers
- **Cross-Referenced Data**: Templates reference each other (e.g., career templates link to relevant major templates)

### Data Flow Pattern
1. **Broad Research** → Start with `resources.md` for research sources
2. **Template Filling** → Use specific templates to document findings
3. **Comparative Analysis** → Compare options using structured data
4. **Timeline Tracking** → Use `timeline-goals.md` to manage deadlines
5. **Financial Planning** → Integrate costs and aid using `financial-planning.md`

## Working with Templates

### For Individual Research Items
When students research specific colleges, majors, or careers, they should:
```bash
# Create college-specific files
cp colleges.md college-mit.md
cp colleges.md college-stanford.md

# Create major-specific files  
cp majors.md major-computer-science.md
cp majors.md major-biomedical-engineering.md

# Create career-specific files
cp careers.md career-software-engineer.md
cp careers.md career-data-scientist.md
```

### Template Completion Workflow
Each template follows a structured data collection pattern:
- **Basic Information** → Foundational facts and figures
- **Requirements/Qualifications** → Entry criteria and prerequisites  
- **Financial Analysis** → Costs, aid, ROI calculations
- **Personal Fit Assessment** → Subjective evaluation and ratings
- **Action Items** → Next steps and follow-up tasks

## Key Features

### Comprehensive Coverage
- **360° College Research**: Academics, admissions, costs, campus life, career outcomes
- **Career-Major Alignment**: Templates designed to connect academic choices with career paths
- **Financial Reality Check**: Detailed ROI analysis and debt planning
- **Timeline Management**: Monthly tracking from junior year through college enrollment

### Built-in Organization Systems
- **Rating Systems**: 1-10 scales for comparative analysis
- **Checkbox Lists**: Progress tracking and action items
- **Structured Tables**: Financial comparisons and deadline tracking
- **Cross-Referencing**: Templates reference related research

### Resource Integration
The `resources.md` file contains 300+ curated links organized by:
- College search and application platforms
- Financial aid and scholarship resources  
- Career exploration and assessment tools
- Test preparation and academic support
- Professional organizations by field

## Common Development Tasks

### Adding New Research Categories
When extending templates with new sections:
1. Follow the existing pattern: **Overview → Details → Personal Assessment → Action Items**
2. Include both quantitative data fields and qualitative reflection sections
3. Add corresponding resources to `resources.md`
4. Update cross-references in related templates

### Customizing for Different Student Profiles
Templates can be adapted for:
- **Different grade levels** (adjust timeline sections)
- **Various career paths** (modify skill/requirement sections)  
- **International students** (add visa/immigration sections)
- **Non-traditional students** (adjust age/timeline assumptions)

### Version Control Best Practices
- Keep the master templates clean and generic
- Use descriptive file names for student-specific copies
- Track changes to resource links and deadlines
- Consider creating student-specific branches for personal data

## File Relationships

### Template Dependencies
- `timeline-goals.md` → References deadlines from all other templates
- `financial-planning.md` → Uses cost data from `colleges.md` 
- `careers.md` → Cross-references with `majors.md` for education requirements
- `resources.md` → Provides research sources for all other templates

### Data Flow Patterns
1. **Research Phase**: `resources.md` → individual templates
2. **Comparison Phase**: Multiple template instances → consolidated analysis
3. **Decision Phase**: All templates → `timeline-goals.md` action items
4. **Financial Phase**: `colleges.md` + `majors.md` → `financial-planning.md`

## Important Notes

### Sensitive Information Handling
- Templates collect personal academic and financial data
- Student should avoid committing personal information to shared repositories
- Consider using `.gitignore` for student-specific completed templates

### Template Maintenance
- Resource links require periodic updates (noted in footer of `resources.md`)
- Deadline dates need annual updates for new student cohorts
- Financial aid information changes annually (FAFSA rules, loan rates)

### Educational Context
This system assumes familiarity with:
- US college application process and terminology
- High school junior/senior year timeline
- Common standardized tests (SAT, ACT, AP)
- Federal financial aid system (FAFSA, CSS Profile)

## Usage Patterns

### Typical User Workflow
1. **Initial Setup**: Read `README.md` and review all templates
2. **Resource Gathering**: Use `resources.md` to identify research sources
3. **Broad Research**: Fill in multiple templates with preliminary data
4. **Deep Research**: Complete detailed analysis for top choices
5. **Comparative Analysis**: Use completed templates for decision-making
6. **Timeline Management**: Update `timeline-goals.md` with deadlines and progress

### Collaborative Use
- Students can share non-personal template sections
- Counselors/advisors can provide feedback on completed templates
- Parents can contribute to financial planning sections
- Peer comparison through anonymized template data

This repository serves as a comprehensive decision-support system for one of the most important choices in a student's life, providing structure and thoroughness to what can be an overwhelming process.