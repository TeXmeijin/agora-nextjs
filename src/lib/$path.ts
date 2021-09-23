/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  join: {
    $url: (url?: { hash?: string }) => ({ pathname: '/join' as const, hash: url?.hash })
  },
  rooms: {
    start: {
      $url: (url?: { hash?: string }) => ({ pathname: '/rooms/start' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/rooms' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
