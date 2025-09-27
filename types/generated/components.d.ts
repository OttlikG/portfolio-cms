import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'component.button', false>;
    description: Schema.Attribute.Text;
    intro_first_part: Schema.Attribute.String;
    intro_last_part: Schema.Attribute.String;
    small_intro: Schema.Attribute.String;
  };
}

export interface SectionTextSectionWithCta extends Struct.ComponentSchema {
  collectionName: 'components_section_text_section_with_ctas';
  info: {
    displayName: 'textSectionWithCta';
  };
  attributes: {
    cta: Schema.Attribute.Component<'component.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.button': ComponentButton;
      'section.hero': SectionHero;
      'section.text-section-with-cta': SectionTextSectionWithCta;
    }
  }
}
