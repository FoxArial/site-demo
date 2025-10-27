import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    form: Schema.Attribute.Component<'shared-elements.form', false>;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface BlocksFirstSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_firts_sections';
  info: {
    category: 'Blocks';
    displayName: 'Firts Section';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared-elements.background', false>;
    cta: Schema.Attribute.Component<'shared-elements.button-link', true>;
    title: Schema.Attribute.Component<'shared-elements.text', true>;
  };
}

export interface BlocksPortfolioSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_portfolio_sections';
  info: {
    displayName: 'Portfolio Section';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    portfolio_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::portfolio-category.portfolio-category'
    >;
    projects: Schema.Attribute.Component<
      'shared-elements.portfolio-card',
      true
    >;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface BlocksServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    services: Schema.Attribute.Component<'shared-elements.services-card', true>;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface BlocksTechnologiesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_technologies_sections';
  info: {
    displayName: 'Technologies Section';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    technologies: Schema.Attribute.Component<
      'shared-elements.techno-card',
      true
    >;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    description: Schema.Attribute.String;
    infoColumns: Schema.Attribute.Component<
      'shared-elements.menu-column',
      true
    >;
    links: Schema.Attribute.Component<'shared-elements.link', true>;
    logo: Schema.Attribute.Component<'shared-elements.logo', false>;
    socialLogos: Schema.Attribute.Component<'shared-elements.logo', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared-elements.background', false>;
    cta: Schema.Attribute.Component<'shared-elements.link', false>;
    logo: Schema.Attribute.Component<'shared-elements.logo', false>;
    navItems: Schema.Attribute.Component<'shared-elements.link', true>;
  };
}

export interface SharedElementsBackground extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_backgrounds';
  info: {
    category: 'shared-elements';
    displayName: 'Background';
  };
  attributes: {
    color: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    standartColors: Schema.Attribute.Enumeration<['white', 'whiteSmoke']> &
      Schema.Attribute.DefaultTo<'white'>;
  };
}

export interface SharedElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_button_links';
  info: {
    category: 'shared-elements';
    displayName: 'ButtonLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.Component<'shared-elements.text', false>;
    theme: Schema.Attribute.Enumeration<['orange', 'lavender', 'peacoat']> &
      Schema.Attribute.DefaultTo<'orange'>;
  };
}

export interface SharedElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    inputs: Schema.Attribute.Component<'shared-elements.input', true>;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface SharedElementsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_info_cards';
  info: {
    displayName: 'InfoCard';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface SharedElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    label: Schema.Attribute.Component<'shared-elements.text', false> &
      Schema.Attribute.Required;
    placeholder: Schema.Attribute.Component<'shared-elements.text', false> &
      Schema.Attribute.Required;
  };
}

export interface SharedElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface SharedElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedElementsMenuColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_menu_columns';
  info: {
    displayName: 'MenuColumn';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared-elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedElementsPortfolioCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_portfolio_cards';
  info: {
    displayName: 'PortfolioCard';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared-elements.background', false>;
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    link: Schema.Attribute.Component<'shared-elements.link', false>;
    portfolio_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio-category.portfolio-category'
    >;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface SharedElementsServicesCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_services_cards';
  info: {
    displayName: 'ServicesCard';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared-elements.button-link', false>;
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Component<'shared-elements.text', false>;
  };
}

export interface SharedElementsTechnoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_techno_cards';
  info: {
    displayName: 'TechnoCard';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared-elements.text', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedElementsText extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['white', 'spearmint', 'gray', 'golden', 'jaffa', 'darkTeal']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'white'>;
    fontWeight: Schema.Attribute.Enumeration<['normal', 'bold']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact-us-section': BlocksContactUsSection;
      'blocks.first-section': BlocksFirstSection;
      'blocks.portfolio-section': BlocksPortfolioSection;
      'blocks.services-section': BlocksServicesSection;
      'blocks.technologies-section': BlocksTechnologiesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared-elements.background': SharedElementsBackground;
      'shared-elements.button-link': SharedElementsButtonLink;
      'shared-elements.form': SharedElementsForm;
      'shared-elements.info-card': SharedElementsInfoCard;
      'shared-elements.input': SharedElementsInput;
      'shared-elements.link': SharedElementsLink;
      'shared-elements.logo': SharedElementsLogo;
      'shared-elements.menu-column': SharedElementsMenuColumn;
      'shared-elements.portfolio-card': SharedElementsPortfolioCard;
      'shared-elements.services-card': SharedElementsServicesCard;
      'shared-elements.techno-card': SharedElementsTechnoCard;
      'shared-elements.text': SharedElementsText;
    }
  }
}
