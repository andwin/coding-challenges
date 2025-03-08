const majorityVote = (votes: string[]): string | null => {
  const voteSum: Record<string, number> = {}

  for (const vote of votes) {
    voteSum[vote] = (voteSum[vote] || 0) + 1
  }

  const hasMajority = Object.entries(voteSum).find(([, value]) => value > votes.length / 2)
  if (hasMajority) {
    const [key] = hasMajority
    return key
  }

  return null
}

export default majorityVote
