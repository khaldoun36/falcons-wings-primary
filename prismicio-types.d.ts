// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | LocationsSlice
  | FrequentlyAskedQuestionsSlice
  | ContactUsFormSlice
  | NationalIdentityFrameworkSlice
  | ProgramOverviewSlice
  | HeroSectionSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *ContactUsForm → Default → Primary*
 */
export interface ContactUsFormSliceDefaultPrimary {
  /**
   * Form Title field in *ContactUsForm → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_form.default.primary.form_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  form_title: prismic.KeyTextField;

  /**
   * Form Subtitle field in *ContactUsForm → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_form.default.primary.form_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  form_subtitle: prismic.KeyTextField;

  /**
   * Email field in *ContactUsForm → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_form.default.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Phone Number field in *ContactUsForm → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_form.default.primary.phone_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField;

  /**
   * Message Placeholder field in *ContactUsForm → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_form.default.primary.message_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  message_placeholder: prismic.KeyTextField;
}

/**
 * Default variation for ContactUsForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactUsFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactUsForm*
 */
type ContactUsFormSliceVariation = ContactUsFormSliceDefault;

/**
 * ContactUsForm Shared Slice
 *
 * - **API ID**: `contact_us_form`
 * - **Description**: ContactUsForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsFormSlice = prismic.SharedSlice<
  "contact_us_form",
  ContactUsFormSliceVariation
>;

/**
 * Item in *FrequentlyAskedQuestions → Default → Primary → Frequently Asked Question*
 */
export interface FrequentlyAskedQuestionsSliceDefaultPrimaryFrequentlyAskedQuestionItem {
  /**
   * Question field in *FrequentlyAskedQuestions → Default → Primary → Frequently Asked Question*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.frequently_asked_question[].question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * Answer field in *FrequentlyAskedQuestions → Default → Primary → Frequently Asked Question*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.frequently_asked_question[].answer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  answer: prismic.KeyTextField;
}

/**
 * Primary content in *FrequentlyAskedQuestions → Default → Primary*
 */
export interface FrequentlyAskedQuestionsSliceDefaultPrimary {
  /**
   * Section Title field in *FrequentlyAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Image field in *FrequentlyAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Frequently Asked Question field in *FrequentlyAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.frequently_asked_question[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  frequently_asked_question: prismic.GroupField<
    Simplify<FrequentlyAskedQuestionsSliceDefaultPrimaryFrequentlyAskedQuestionItem>
  >;
}

/**
 * Default variation for FrequentlyAskedQuestions Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrequentlyAskedQuestionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FrequentlyAskedQuestionsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FrequentlyAskedQuestions*
 */
type FrequentlyAskedQuestionsSliceVariation =
  FrequentlyAskedQuestionsSliceDefault;

/**
 * FrequentlyAskedQuestions Shared Slice
 *
 * - **API ID**: `frequently_asked_questions`
 * - **Description**: FrequentlyAskedQuestions
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrequentlyAskedQuestionsSlice = prismic.SharedSlice<
  "frequently_asked_questions",
  FrequentlyAskedQuestionsSliceVariation
>;

/**
 * Primary content in *HeroSection → Default → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * Hero Image field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * Section Title field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Description field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.section_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_description: prismic.KeyTextField;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

/**
 * Item in *Locations → Default → Primary → Total Schools In Emirates*
 */
export interface LocationsSliceDefaultPrimaryTotalSchoolsInEmiratesItem {
  /**
   * Emirate field in *Locations → Default → Primary → Total Schools In Emirates*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.total_schools_in_emirates[].emirate
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  emirate: prismic.KeyTextField;

  /**
   * Number of Schools field in *Locations → Default → Primary → Total Schools In Emirates*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.total_schools_in_emirates[].number_of_schools
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  number_of_schools: prismic.NumberField;
}

/**
 * Item in *Locations → Default → Primary → Schools Logos*
 */
export interface LocationsSliceDefaultPrimarySchoolsLogosItem {
  /**
   * Logo field in *Locations → Default → Primary → Schools Logos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.schools_logos[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Primary content in *Locations → Default → Primary*
 */
export interface LocationsSliceDefaultPrimary {
  /**
   * Section Title field in *Locations → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Total Schools In Emirates field in *Locations → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.total_schools_in_emirates[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  total_schools_in_emirates: prismic.GroupField<
    Simplify<LocationsSliceDefaultPrimaryTotalSchoolsInEmiratesItem>
  >;

  /**
   * Schools Logos field in *Locations → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.schools_logos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  schools_logos: prismic.GroupField<
    Simplify<LocationsSliceDefaultPrimarySchoolsLogosItem>
  >;
}

/**
 * Default variation for Locations Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LocationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LocationsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Locations*
 */
type LocationsSliceVariation = LocationsSliceDefault;

/**
 * Locations Shared Slice
 *
 * - **API ID**: `locations`
 * - **Description**: Locations
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LocationsSlice = prismic.SharedSlice<
  "locations",
  LocationsSliceVariation
>;

/**
 * Item in *NationalIdentityFramework → Default → Primary → National Identity Framework*
 */
export interface NationalIdentityFrameworkSliceDefaultPrimaryNationalIdentityFrameworkItem {
  /**
   * Image field in *NationalIdentityFramework → Default → Primary → National Identity Framework*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: national_identity_framework.default.primary.national_identity_framework[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *NationalIdentityFramework → Default → Primary → National Identity Framework*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: national_identity_framework.default.primary.national_identity_framework[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *NationalIdentityFramework → Default → Primary → National Identity Framework*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: national_identity_framework.default.primary.national_identity_framework[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *NationalIdentityFramework → Default → Primary*
 */
export interface NationalIdentityFrameworkSliceDefaultPrimary {
  /**
   * Section Title field in *NationalIdentityFramework → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: national_identity_framework.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * National Identity Framework field in *NationalIdentityFramework → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: national_identity_framework.default.primary.national_identity_framework[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  national_identity_framework: prismic.GroupField<
    Simplify<NationalIdentityFrameworkSliceDefaultPrimaryNationalIdentityFrameworkItem>
  >;
}

/**
 * Default variation for NationalIdentityFramework Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NationalIdentityFrameworkSliceDefault =
  prismic.SharedSliceVariation<
    "default",
    Simplify<NationalIdentityFrameworkSliceDefaultPrimary>,
    never
  >;

/**
 * Slice variation for *NationalIdentityFramework*
 */
type NationalIdentityFrameworkSliceVariation =
  NationalIdentityFrameworkSliceDefault;

/**
 * NationalIdentityFramework Shared Slice
 *
 * - **API ID**: `national_identity_framework`
 * - **Description**: NationalIdentityFramework
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NationalIdentityFrameworkSlice = prismic.SharedSlice<
  "national_identity_framework",
  NationalIdentityFrameworkSliceVariation
>;

/**
 * Item in *ProgramOverview → Default → Primary → Program Overview*
 */
export interface ProgramOverviewSliceDefaultPrimaryProgramOverviewItem {
  /**
   * Title field in *ProgramOverview → Default → Primary → Program Overview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_overview.default.primary.program_overview[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *ProgramOverview → Default → Primary → Program Overview*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_overview.default.primary.program_overview[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *ProgramOverview → Default → Primary*
 */
export interface ProgramOverviewSliceDefaultPrimary {
  /**
   * Section Title field in *ProgramOverview → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_overview.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Image Wide field in *ProgramOverview → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: program_overview.default.primary.image_wide
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_wide: prismic.ImageField<never>;

  /**
   * Image Square field in *ProgramOverview → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: program_overview.default.primary.image_square
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_square: prismic.ImageField<never>;

  /**
   * Program Overview field in *ProgramOverview → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: program_overview.default.primary.program_overview[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  program_overview: prismic.GroupField<
    Simplify<ProgramOverviewSliceDefaultPrimaryProgramOverviewItem>
  >;
}

/**
 * Default variation for ProgramOverview Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramOverviewSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProgramOverviewSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProgramOverview*
 */
type ProgramOverviewSliceVariation = ProgramOverviewSliceDefault;

/**
 * ProgramOverview Shared Slice
 *
 * - **API ID**: `program_overview`
 * - **Description**: ProgramOverview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramOverviewSlice = prismic.SharedSlice<
  "program_overview",
  ProgramOverviewSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactUsFormSlice,
      ContactUsFormSliceDefaultPrimary,
      ContactUsFormSliceVariation,
      ContactUsFormSliceDefault,
      FrequentlyAskedQuestionsSlice,
      FrequentlyAskedQuestionsSliceDefaultPrimaryFrequentlyAskedQuestionItem,
      FrequentlyAskedQuestionsSliceDefaultPrimary,
      FrequentlyAskedQuestionsSliceVariation,
      FrequentlyAskedQuestionsSliceDefault,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      LocationsSlice,
      LocationsSliceDefaultPrimaryTotalSchoolsInEmiratesItem,
      LocationsSliceDefaultPrimarySchoolsLogosItem,
      LocationsSliceDefaultPrimary,
      LocationsSliceVariation,
      LocationsSliceDefault,
      NationalIdentityFrameworkSlice,
      NationalIdentityFrameworkSliceDefaultPrimaryNationalIdentityFrameworkItem,
      NationalIdentityFrameworkSliceDefaultPrimary,
      NationalIdentityFrameworkSliceVariation,
      NationalIdentityFrameworkSliceDefault,
      ProgramOverviewSlice,
      ProgramOverviewSliceDefaultPrimaryProgramOverviewItem,
      ProgramOverviewSliceDefaultPrimary,
      ProgramOverviewSliceVariation,
      ProgramOverviewSliceDefault,
    };
  }
}
