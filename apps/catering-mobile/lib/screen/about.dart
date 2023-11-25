import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';

class about extends StatefulWidget {
  @override
  _About createState() => _About();
}

class _About extends State<about> {
  String _about =
      """Welcome to The Cooked Sisters, founded by two friends with a shared passion for food and a commitment to exceptional service. 
  With years of experience in the culinary industry, we've combined our skills and expertise to create a company that's dedicated to providing delicious food 
  and memorable experiences for all occasions.

Our approach is simple: we believe that the key to great catering is not just about the food, but also about the people. That's why we work closely with each of 
our clients to understand their unique needs and preferences, and tailor our menus and services accordingly. Whether you're planning an intimate dinner party or a 
large-scale event, we're here to help you create a one-of-a-kind experience that exceeds your expectations.

At The Cooked Sisters, we're committed to using only the freshest, highest-quality ingredients, sourced from local and sustainable producers whenever possible. 
From classic comfort food to innovative global cuisine, we offer a wide range of menu options to suit any taste and budget. And with a team of experienced chefs 
and servers, we ensure that every dish is expertly prepared and presented with care.

We're proud to have built a reputation as one of the most trusted and reliable catering companies in the industry, and we're passionate about delivering 
exceptional service to each and every one of our clients. Whether you're hosting a corporate event, a wedding, or a family gathering, we're here to make 
your vision a reality. Contact us today to learn more about our catering services and how we can help you create an unforgettable event.

 """;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "About Us",
          style: TextStyle(color: Colors.black, fontSize: 25),
        ),
        centerTitle: true,
        backgroundColor: Color.fromARGB(255, 55, 175, 166),
      ),
      body: Markdown(
        data: _about,
      ),
    );
  }
}
