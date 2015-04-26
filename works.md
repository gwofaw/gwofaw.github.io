---
title: works
---

[...]

{% assign sorted_works = (site.works | sort: 'title', 'last') %}
{% for work in sorted_works %}
 -  [{{work.tagline}} [{{ work.title }}]](/works/{{work.title}})
{% endfor %}

[...]
