/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'ar';

export interface ServiceDetail {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  heroText: string;
  heroTextAr: string;
  stats: { label: string; labelAr: string; value: string; valueAr: string }[];
  contentBlocks: { title: string; titleAr: string; points: string[]; pointsAr: string[] }[];
  bestFor: string[];
  bestForAr: string[];
}

export interface Project {
  id: string;
  name: string;
  nameAr: string;
  location: string;
  locationAr: string;
  sector: 'alamein' | 'infrastructure' | 'resorts';
  client: string;
  clientAr: string;
  scope: string;
  scopeAr: string;
  materials: string;
  materialsAr: string;
  timeline: string;
  timelineAr: string;
  achievement: string;
  achievementAr: string;
  imageUrl: string;
}

export interface TestingMatrixItem {
  parameter: string;
  parameterAr: string;
  standard: string;
  standardAr: string;
  frequency: string;
  frequencyAr: string;
  location: string;
  locationAr: string;
}

export interface JobPosition {
  id: string;
  title: string;
  titleAr: string;
  department: string;
  departmentAr: string;
  location: string;
  locationAr: string;
  type: string;
  typeAr: string;
  description: string;
  descriptionAr: string;
  requirements: string[];
  requirementsAr: string[];
}

export interface DownloadAsset {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  filename: string;
  fileSize: string;
}
