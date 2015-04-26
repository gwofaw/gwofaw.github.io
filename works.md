---
title: works
---

[...]

{% assign sorted_works = (site.works | sort: 'title', 'first') %}
{% for work in sorted_works %}
 -  ‽ [{{work.tagline}} [{{ work.title }}]](/works/{{work.title}})
{% endfor %}

[...]
