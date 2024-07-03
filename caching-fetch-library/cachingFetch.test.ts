import {
  preloadCachingFetch,
  useCachingFetch,
} from './cachingFetch';

test('smoke test', () => {
	expect(preloadCachingFetch).not.toBeNull()
})
