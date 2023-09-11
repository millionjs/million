import * as clack from '@clack/prompts'
import * as fs from 'fs'
import chalk from 'chalk'

/**
 * Abort the process if the user cancels the input prompt.
 */
export async function abortIfCancelled<T>(input: T | Promise<T>): Promise<Exclude<T, symbol>> {
  if (clack.isCancel(await input)) {
    clack.cancel('Million setup cancelled.')
    process.exit(0)
  } else {
    return input as Exclude<T, symbol>
  }
}

/**
 * Abort the process with a message. (mostly on error)
 */
export async function abort(message?: string, status?: number): Promise<never> {
  clack.outro(
    message ??
      chalk.red('Setup failed.') + `\nReport a bug at ${chalk.cyan('https://github.com/aidenybai/million/issues')}`,
  )
  return process.exit(status ?? 1)
}

/**
 * Get the next router to use.
 */
export async function getNextRouter(): Promise<'app' | 'pages'> {
  if (fs.existsSync('src/app') || fs.existsSync('app')) {
    return 'app'
  } else if (fs.existsSync('src/pages') || fs.existsSync('pages')) {
    return 'pages'
  } else {
    const selectedRouter: 'app' | 'pages' = await abortIfCancelled(
      clack.select({
        message: 'Will you use app Router or pages Router?',
        options: [
          {
            label: 'App Router',
            value: 'app',
          },
          {
            label: 'Pages Router',
            value: 'pages',
          },
        ],
      }),
    )

    clack.log.success(`Detected ${chalk.bold.cyan(selectedRouter)} router for next project.`)
    return selectedRouter
  }
}