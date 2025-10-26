import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFirstSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_firts_sections';
  info: {
    category: 'Blocks';
    displayName: 'Firts Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared-elements.button-link', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
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
    label: Schema.Attribute.String;
    labelText: Schema.Attribute.Component<'shared-elements.text', false>;
    theme: Schema.Attribute.Enumeration<['orange', 'lavender', 'peacoat']>;
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
    labelText: Schema.Attribute.Component<'shared-elements.text', false>;
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
      'blocks.first-section': BlocksFirstSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared-elements.background': SharedElementsBackground;
      'shared-elements.button-link': SharedElementsButtonLink;
      'shared-elements.link': SharedElementsLink;
      'shared-elements.logo': SharedElementsLogo;
      'shared-elements.menu-column': SharedElementsMenuColumn;
      'shared-elements.text': SharedElementsText;
    }
  }
}
