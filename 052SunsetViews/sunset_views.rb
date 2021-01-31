# Solution 
# O(n) time / O(n) space

def sunset_views(buildings, direction)
    buildings_with_sunset_views = []

    start_idx = direction == "WEST" ? 0 : buildings.length - 1
    step = direction == "WEST" ? 1 : -1

    idx = start_idx
    running_max_height = 0
    while idx >= 0 && idx < buildings.length
        building_height = buildings[idx]

        if building_height > running_max_height
            buildings_with_sunset_views << idx
        end

        running_max_height = [running_max_height, building_height].max

        idx += step
    end

    if direction == "EAST"
        return buildings_with_sunset_views.reverse
    end

    return buildings_with_sunset_views
end


# Solution 
# O(n) time / O(n) space
    
def sunset_views(buildings, direction)
    candidate_buildings = []

    start_idx = direction == "EAST" ? 0 : buildings.length - 1
    step = direction =="EAST" ? 1 : -1

    idx = start_idx

    while idx >= 0 && idx < buildings.length
        building_height = buildings[idx]

        while candidate_buildings.length > 0 && buildings[candidate_buildings[-1]] <= building_height
            candidate_buildings.pop()
        end
        candidate_buildings << idx

        idx += step
    end

    if direction == "WEST"
        return candidate_buildings.reverse
    end

    return candidate_buildings
end
    