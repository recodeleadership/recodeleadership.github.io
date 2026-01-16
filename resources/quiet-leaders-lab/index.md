---
layout: page
title: Quiet Leaders Lab
permalink: /resources/quiet-leaders-lab/
description: Monthly gatherings for quiet, thoughtful leaders navigating visibility, confidence, and leadership in their own way.
image: /assets/img/resources/quiet-leaders-lab-400x300.png
calendar_subscribe_link: https://luma.com/quietleaderslab
---

<p>
Quiet Leaders Lab is a monthly gathering space for quiet, high-achieving leaders who want to lead with confidence *without* becoming someone they’re not.

Each session explores a theme many quiet leaders wrestle with — visibility, boundaries, confidence, and recognition — through reflection, conversation, and shared learning.
</p>

<hr>

---

## Upcoming Gatherings

<div class="archive-list">
{% assign upcoming = site.qll-gatherings
  | where_exp: "event", "event.date >= site.time"
  | sort: "date" %}
{% for event in upcoming %}
  {% include qll-archive-item.html event=event %}
{% endfor %}
</div>

## Past Gatherings

<div class="archive-list">
{% assign past = site.qll-gatherings
  | where_exp: "event", "event.date < site.time"
  | sort: "date"
  | reverse %}
{% for event in past %}
  {% include qll-archive-item.html event=event %}
{% endfor %}
</div>

<div class="archive-cta">
  <a href="{{ page.calendar_subscribe_link }}" class="btn btn-primary btn-xl">
    Subscribe to Event Calendar
  </a>
</div>