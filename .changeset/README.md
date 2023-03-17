# changesets

## Pre release

[Link to the pre-release version of the documentation](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)

In this case, we are looking at an alpha release. We start by entering into the
pre-release mode:

- `changeset pre enter <tag>`
  - alpha
- `changeset add`
  - choose what packages to version bump
- `changeset version`
  - this will bump the version of the packages

## Major Minor Patch

- `changeset`
  - choose what packages to version bump
- `changeset version`
  - this will bump the version of the packages

## Publish and Tag

- `changeset publish` will publish the packages to the registry and create a
  tag.
  - `changeset tag` will create a tag for the current version of the packages.
- You will need to push those tags via `git push --follow-tags`.
