const numberOfHashTags = 3

const getHashTags = (text: string): string[] => {
  const words = text.toLowerCase().replace(/[^a-z ]/g, '').split(' ')
  const longestWords = words
    .sort((a, b) => b.length - a.length)
    .slice(0, numberOfHashTags)

  const hashTags = longestWords.map(word => `#${word}`)
  return hashTags
}

export default getHashTags
