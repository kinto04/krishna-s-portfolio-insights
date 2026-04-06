

# Audience-Adaptive Hero with URL Query Parameters

## Approach

Use URL query parameters to swap the hero copy based on who's viewing the portfolio. When you share a link like `krishnasuresh.com/?v=startup`, the hero updates to the startup-focused copy. Default (no parameter) shows the startup version.

Three variants triggered by `?v=` parameter:

| Parameter | Heading | Subtitle |
|-----------|---------|----------|
| `?v=startup` (default) | A 0-1 Product Manager. | I transform ideas into Market-Ready Solutions by bridging Strategy, Design, and Development to create products people love and use. |
| `?v=product` | I'm a Product Manager | I combine data-driven insights with user-centered design to enhance existing products and develop new features that drive retention and expansion. |
| `?v=design` | A Design-Driven Product Manager. | I facilitate design thinking processes across teams and stakeholders, creating holistic solutions while communicating the impact of good design decisions. |

## How it works

- Read `?v=` from the URL using `useSearchParams` from React Router
- Map the value to the correct heading + subtitle pair
- If no parameter or unrecognized value, default to the startup version
- The rest of the page stays identical -- only the hero text swaps
- No visible UI for switching -- it's controlled entirely by the link you share

## Shareable links

You'd send different links depending on who you're targeting:
- `yoursite.com` or `yoursite.com/?v=startup` -- early-stage companies
- `yoursite.com/?v=product` -- established product teams
- `yoursite.com/?v=design` -- design-focused roles

## Files Modified

- `src/pages/Home.tsx` -- add `useSearchParams`, define variant map, swap hero heading + subtitle based on query param

## Technical Notes

- Single file change, no new dependencies
- Query params persist through navigation if needed
- Clean URLs still work (defaults to startup copy)

