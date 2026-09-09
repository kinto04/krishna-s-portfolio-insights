# Tasteful motion for the homepage media

## Approach
Use Motion AI Kit’s animation guidance rather than adding motion for its own sake: animate only opacity and transforms, keep the sequence brief, and make the media feel responsive without turning it into a carousel or decorative effect.

## Changes
- Give the four media tiles a staggered reveal so they settle into place as one coordinated composition.
- Add a very small, spring-like image scale and lift on pointer hover, with the image movement contained inside each tile.
- Let the video remain the active focal point while keeping the three photographs quieter; avoid looping drift, parallax, blur, rotation, or layout movement.
- Pause the video when it is outside the viewport and keep its existing muted loop behavior while visible.
- Disable entrance offsets, hover transforms, and autoplay motion when the visitor prefers reduced motion.

## Technical details
- Reuse the existing `Reveal` and motion easing system, adding a focused media-tile primitive rather than a new animation library.
- Keep animation on compositor-friendly `transform` and `opacity` properties.
- Update the project design documentation with the hero-media motion rule.
- Verify the result at desktop and mobile widths, including reduced-motion behavior and layout stability.
