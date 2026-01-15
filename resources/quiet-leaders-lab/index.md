---
layout: page
title: Quiet Leaders Lab — Archive
permalink: /resources/quiet-leaders-lab/
description: Monthly gatherings for quiet, thoughtful leaders navigating visibility, confidence, and leadership in their own way.
image: /assets/img/resources/quiet-leaders-lab-400x300.png
---

## Quiet Leaders Lab

Quiet Leaders Lab is a monthly gathering space for quiet, high-achieving leaders who want to lead with confidence *without* becoming someone they’re not.

Each session explores a theme many quiet leaders wrestle with — visibility, boundaries, confidence, and recognition — through reflection, conversation, and shared learning.

---

## Gatherings

{% assign gatherings = site.qll-gatherings | sort: "date" | reverse %}

{% for gathering in gatherings %}
### [{{ gathering.title }}]({{ gathering.url }})

{% if gathering.image %}
<img src="{{ gathering.image }}" alt="{{ gathering.title }}" style="max-width:100%; margin: 1rem 0;">
{% endif %}

{{ gathering.summary }}

<p><em>{{ gathering.date | date: "%B %Y" }}</em></p>

---
{% endfor %}
