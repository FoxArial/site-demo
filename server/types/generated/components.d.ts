import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.header': LayoutHeader;
      'shared-elements.link': SharedElementsLink;
      'shared-elements.logo': SharedElementsLogo;
    }
  }
}
