export type TeaserContent = {
  id: string;
  title: string;
  excerpt: string;
};

export type TeaserProps = {
  content: TeaserContent;
};

export type HomepageProps = {
  data: TeaserContent[];
};

