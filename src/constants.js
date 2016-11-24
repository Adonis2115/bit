/** @flow */
const userHome = require('user-home');
const packageFile = require('../package.json');
const path = require('path');

function getDirectory(category: string): string {
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, 'Bit', category);
  }

  return path.join(userHome, `.${category}`, 'bit');
}

function getCacheDirectory(): string {
  if (process.platform === 'darwin') {
    return path.join(userHome, 'Library', 'Caches', 'Bit');
  }

  return getDirectory('cache');
}

/**
 * bit description
 */
export const BIT_DESCRIPTION = 'bit is a free and open source tool designed for easy use and management of usable code components.';

/**
 * bit usage
 */
export const BIT_USAGE = '[--version] [--help] <command> [<args>]';

export const BIT_DIR_NAME = 'bits';

export const BIT_INLINE_DIRNAME = 'inline';

export const BIT_IMPORTED_DIRNAME = 'imported';

export const BIT_JSON = 'bit.json';

/**
 * cache root directory
 */
export const CACHE_ROOT = getCacheDirectory();

/**
 * modules cache directory
 */
export const MODULES_CACHE_DIR = path.join(CACHE_ROOT, 'modules');

/**
 * app cache directory
 */
export const APP_CACHE_DIR = path.join(CACHE_ROOT, 'app');

/**
 * bits cache directory 
 */
export const GLOBAL_BIT_CACHE = path.join(CACHE_ROOT, 'bits');

/**
 * modules cache filename
 */
export const MODULES_CACHE_FILENAME = path.join(MODULES_CACHE_DIR, '.roadrunner.json'); 

/**
 * bit registry default URL.
 */
export const BIT_REGISTRY = '';

/**
 * current bit application version
 */
export const BIT_VERSION = packageFile.version;