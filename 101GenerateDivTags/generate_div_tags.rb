# Solution
# O((2n)!/((n!((n + 1)!)))) time / O((2n)!/((n!((n + 1)!)))) space
# n - input number

def generate_div_tags(number_of_tags)
  matched_div_tags = []
  generate_div_tags_from_prefix(number_of_tags, number_of_tags, "", matched_div_tags)
  matched_div_tags
end

def generate_div_tags_from_prefix(opening_tags_needed, closing_tags_needed, prefix, result)
  if opening_tags_needed > 0
    new_prefix = prefix + "<div>"
    generate_div_tags_from_prefix(opening_tags_needed - 1, closing_tags_needed, new_prefix, result)
  end

  if opening_tags_needed < closing_tags_needed
    new_prefix = prefix + "</div>"
    generate_div_tags_from_prefix(opening_tags_needed, closing_tags_needed - 1, new_prefix, result)
  end

  if closing_tags_needed == 0
    result << prefix
  end
end
