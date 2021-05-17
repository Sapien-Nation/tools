export type SettingType =
  | 'DISCOVERABLE'
  | 'ECHO_CONTENT'
  | 'SHARE_CONTENT'
  | 'SHOW_MAIN_SQUARE'
  | 'PUBLIC';

export interface Rule {
  position: number;
  name: string;
  description: string;
}

export interface Setting {
  settingAllow: boolean;
  type: SettingType;
}

export interface Privacy {
  discoverable: boolean;
  echoContent: boolean;
  shareContent: boolean;
  showMainSquare: boolean;
  public: boolean;
}

export interface TribeSettings {
  name: string;
  identifier: string;
  description: string;
  rules: Rule[];
  privacy: Privacy;
}
