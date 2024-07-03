import {
  preloadCachingFetch,
  useCachingFetch,
} from './cachingFetch';

test('smoke test', () => {
	expect(preloadCachingFetch).not.toBeNull()
})

describe('useCachingFetch', () => {
  it('returns an object with the desired properties', () => {
    const obj = useCachingFetch("url")
    expect(Object.keys(obj)).toHaveLength(3)
    expect(obj).toHaveProperty("data")
    expect(obj).toHaveProperty("isLoading")
    expect(obj).toHaveProperty("error")
  })
  it('fetches data correctly', () => {
    const obj = useCachingFetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123")
    expect(obj.isLoading).toBeTruthy()
  })
})


