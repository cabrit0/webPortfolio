// Professional Molecules - Complex components built from atoms
// These components combine multiple atoms to create sophisticated UI elements

// Modal components
export {
  Modal,
  type ModalProps
} from "./Modal"

// Project components
export { 
  ProjectCard, 
  ProjectGrid,
  type ProjectCardProps,
  type ProjectGridProps 
} from "./ProjectCard"

// Contact components
export { 
  ContactForm,
  type ContactFormProps,
  type ContactFormData 
} from "./ContactForm"

// Technology components
export { 
  TechBadge, 
  TechStack, 
  TechCategoryFilter,
  techConfig,
  type TechBadgeProps,
  type TechStackProps,
  type TechCategoryFilterProps 
} from "./TechBadge"

// Navigation components
export { 
  NavigationMenu,
  useNavigation,
  type NavigationMenuProps,
  type NavigationItem 
} from "./NavigationMenu"

// Feature components
export { 
  FeatureCard, 
  FeatureGrid, 
  FeatureShowcase,
  type FeatureCardProps,
  type FeatureGridProps,
  type FeatureShowcaseProps 
} from "./FeatureCard"

// Testimonial components
export {
  TestimonialCard,
  TestimonialGrid,
  TestimonialCarousel,
  type TestimonialCardProps,
  type TestimonialGridProps,
  type TestimonialCarouselProps
} from "./TestimonialCard"

// Reusable project components (SOLID refactoring)
export { ProjectActionButtons } from "./ProjectActionButtons"
export { ProjectHeader } from "./ProjectHeader"
export { ProjectSection } from "./ProjectSection"
export { SectionHeader } from "./SectionHeader"


