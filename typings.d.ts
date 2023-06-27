declare module "maath/random/dist/maath-random.esm" {
  // Add your type definitions here
  // For example:
  export function getRandomNumber(): number;
}

interface Skill_data {
  skill_name: string;
  Image: string;
  width: number;
  hight: number;
}

interface Project_data {
  title: string;
  video_key: string;
  say_xi: string;
  say_xi_blog: string;
  technology_feature: string[];
  about_this_app: string;
  design_blog: string;
  dependencies_blog: string;
  package: string[];
  conclusion_blog: string;
  youtube_link: string;
  githhub_link: string;
  frontend_dowload_link: string;
  backend_dowload_link: string;
  project_image: string;
  project_blog: string;
  Type: string;
  project_Img_Mobile?: string[];
  indevelopment: boolean;
}

interface Link {
  You_tube: string;
  Github: string;
  Dowload: string;
}


checkFields<any>()
