import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentAward extends Struct.ComponentSchema {
  collectionName: 'components_component_awards';
  info: {
    displayName: 'award';
  };
  attributes: {
    link: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

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

export interface ComponentImage extends Struct.ComponentSchema {
  collectionName: 'components_component_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tags: Schema.Attribute.Component<'component.tag', true>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentPost extends Struct.ComponentSchema {
  collectionName: 'components_component_posts';
  info: {
    displayName: 'post';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Component<'component.image', false>;
    slug: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'component.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTag extends Struct.ComponentSchema {
  collectionName: 'components_component_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_component_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    author: Schema.Attribute.String;
    authorImage: Schema.Attribute.Component<'component.image', false>;
    feedback: Schema.Attribute.Blocks;
    jobTitle: Schema.Attribute.String;
  };
}

export interface ComponentTitleWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_title_with_descriptions';
  info: {
    displayName: 'titleWithDescription';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionAwards extends Struct.ComponentSchema {
  collectionName: 'components_section_awards';
  info: {
    displayName: 'awards';
  };
  attributes: {
    awards: Schema.Attribute.Component<'component.award', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_section_get_in_touches';
  info: {
    displayName: 'getInTouch';
  };
  attributes: {
    cta: Schema.Attribute.Component<'component.button', false>;
    firstTitle: Schema.Attribute.String;
    links: Schema.Attribute.Component<'component.button', true>;
    secondTitle: Schema.Attribute.String;
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

export interface SectionInsight extends Struct.ComponentSchema {
  collectionName: 'components_section_insights';
  info: {
    displayName: 'insight';
  };
  attributes: {
    link: Schema.Attribute.String;
    posts: Schema.Attribute.Component<'component.post', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionMarquee extends Struct.ComponentSchema {
  collectionName: 'components_section_marquees';
  info: {
    displayName: 'marquee';
  };
  attributes: {
    images: Schema.Attribute.Component<'component.image', true>;
  };
}

export interface SectionPostList extends Struct.ComponentSchema {
  collectionName: 'components_section_post_lists';
  info: {
    displayName: 'postList';
  };
  attributes: {
    posts: Schema.Attribute.Component<'component.post', true>;
    title: Schema.Attribute.String;
    viewAll: Schema.Attribute.Component<'component.button', false>;
  };
}

export interface SectionSelectedWorks extends Struct.ComponentSchema {
  collectionName: 'components_section_selected_works';
  info: {
    displayName: 'selectedWorks';
  };
  attributes: {
    cta: Schema.Attribute.Component<'component.button', false>;
    images: Schema.Attribute.Component<'component.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'component.testimonial', true>;
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

export interface SectionThreeColumnDescription extends Struct.ComponentSchema {
  collectionName: 'components_section_three_column_descriptions';
  info: {
    displayName: 'threeColumnDescription';
  };
  attributes: {
    columnItems: Schema.Attribute.Component<
      'component.title-with-description',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.award': ComponentAward;
      'component.button': ComponentButton;
      'component.image': ComponentImage;
      'component.post': ComponentPost;
      'component.tag': ComponentTag;
      'component.testimonial': ComponentTestimonial;
      'component.title-with-description': ComponentTitleWithDescription;
      'section.awards': SectionAwards;
      'section.get-in-touch': SectionGetInTouch;
      'section.hero': SectionHero;
      'section.insight': SectionInsight;
      'section.marquee': SectionMarquee;
      'section.post-list': SectionPostList;
      'section.selected-works': SectionSelectedWorks;
      'section.testimonial': SectionTestimonial;
      'section.text-section-with-cta': SectionTextSectionWithCta;
      'section.three-column-description': SectionThreeColumnDescription;
    }
  }
}
