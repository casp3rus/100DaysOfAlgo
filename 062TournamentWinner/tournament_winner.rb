# Solution
# O(n) time / O(k) space
# n - number competitions
# k - number teams competing

HOME_TEAM_WON = 1

def tournament_winner(competitions, results)
  current_best_team = ""
  scores = { current_best_team => 0 }

  (0..competitions.length).each { |idx|
    result = results[idx]
    home_team, away_team = competitions[idx]

    winning_team = result == HOME_TEAM_WON ? home_team : away_team

    update_scores(winning_team, 3, scores)

    if scores[winning_team] > scores[current_best_team]
      current_best_team = winning_team
    end
  }
  return current_best_team
end

def update_scores(team, points, scores)
  if !scores[team]
    scores[team] = points
  else
    scores[team] += points
  end
end
