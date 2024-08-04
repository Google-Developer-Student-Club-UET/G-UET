export default defineAppConfig({
  ui: {
    strategy: 'override',
    primary: 'blue',
    gray: 'cool',
    horizontalNavigation: {
      before:
        'before:absolute before:inset-x-0 before:inset-y-2 hover:before:bg-gray-50 hover:before:opacity-0'
    },
    verticalNavigation: {
      inactive:
        'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50',
      active:
        'before:absolute before:inset-x-0 text-gray-900 before:inset-y-2 hover:before:bg-gray-50 hover:before:opacity-0'
    },
    avatar: {
      chip: {
        base: 'absolute rounded-full ring-1 ring-white flex items-center justify-center text-white font-medium'
      }
    },
    button: {
      variant: {
        solid:
          'shadow-sm text-white bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400'
      }
    },
    select: {
      color: {
        white: {
          outline: 'shadow-sm bg-white text-gray-900 ring-1 ring-gray-300'
        }
      }
    },
    input: {
      color: {
        white: {
          outline: 'shadow-sm bg-white text-gray-900 ring-1 ring-gray-300'
        }
      }
    }
  }
})
