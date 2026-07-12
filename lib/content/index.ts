import type { Article } from './types';
import { whatIsShadowWork, howToFindYourShadow } from './a';
import { shadowWorkPrompts, projectionPsychology } from './b';
import { carlJungShadow, shadowWorkExercises } from './c';
import { isShadowWorkDangerous, sevenAnimalsMethod, choosingAnApp } from './d';

export type { Article, Section, Block } from './types';

/** The pillar. Everything else links back to it. */
export const PILLAR = whatIsShadowWork;

export const ARTICLES: Article[] = [
  whatIsShadowWork,
  howToFindYourShadow,
  shadowWorkPrompts,
  projectionPsychology,
  carlJungShadow,
  shadowWorkExercises,
  isShadowWorkDangerous,
  sevenAnimalsMethod,
  choosingAnApp,
];

export const BY_SLUG = new Map(ARTICLES.map(a => [a.slug, a]));

export function getArticle(slug: string): Article | undefined {
  return BY_SLUG.get(slug);
}
