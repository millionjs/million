import type { FilterPattern } from '@rollup/pluginutils';
import type { MillionTelemetry } from '../telemetry';

interface PluginOptions {
  filter?: {
    include?: FilterPattern;
    exclude?: FilterPattern;
  };
  /**
   * @default 'react'
   */
  mode?: 'react' | 'vdom';
  auto?:
    | boolean
    | { threshold?: number; skip?: (string | RegExp)[]; rsc?: boolean };
  /**
   * @default false
   */
  optimize?: boolean;
  /**
   * @default false
   */
  server?: boolean;
  /**
   * @default false
   */
  hmr?: boolean;
  /**
   * @default true
   */
  log?: boolean | 'info';
  /**
   * @default false
   */
  rsc?: boolean;
  /**
   * Million.js collects anonymous telemetry data about general usage. Participation is optional, and you may opt-out at any time.
   *
   * We do not collect any metrics which may contain sensitive data. This includes, but is not limited to: environment
   * variables, personally identifiable information, file paths, contents of files, logs, stack traces, git remote
   * information, or unsanitized JavaScript error messages.
   *
   * @default true
   */
  telemetry?: boolean;
  MillionTelemetry?: MillionTelemetry;
  /**
   * @deprecated Use `log` instead
   */
  mute?: boolean | 'info';
}

export type Options =
  | PluginOptions
  | (Omit<PluginOptions, 'mode'> & {
      /**
       * @deprecated Use `react` instead
       */
      mode: 'react-server' | 'preact' | 'preact-server';
    });
