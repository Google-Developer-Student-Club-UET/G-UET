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
    }
  }
})
