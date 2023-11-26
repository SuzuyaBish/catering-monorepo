import 'package:catering_mobile/screen/blog.dart';
import 'package:catering_mobile/screen/home.dart';
import 'package:catering_mobile/screen/recipe.dart';
import 'package:flutter/material.dart';

class contact extends StatefulWidget {
  const contact({super.key});

  @override
  _ContactState createState() => _ContactState();
}

class _ContactState extends State<contact> {
  late String email, description, NameSurname, number;

  bool showBtmAppBr = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Contact Us",
          style: TextStyle(color: Colors.black, fontSize: 25),
        ),
        centerTitle: true,
        backgroundColor: const Color.fromARGB(255, 55, 175, 166),
      ),
      body: Container(
          child: Column(
        children: <Widget>[
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(children: <Widget>[
              TextField(
                decoration: const InputDecoration(hintText: "Name and Surname"),
                onChanged: (val) {
                  NameSurname = val;
                },
              ),
              TextField(
                decoration: const InputDecoration(hintText: "Email"),
                onChanged: (val) {
                  email = val;
                },
              ),
              TextField(
                decoration: const InputDecoration(hintText: "Number"),
                onChanged: (val) {
                  number = val;
                },
              ),
              TextField(
                decoration: const InputDecoration(hintText: "Description"),
                onChanged: (val) {
                  description = val;
                },
              ),
            ]),
          )
        ],
      )),
      bottomNavigationBar: AnimatedContainer(
        duration: const Duration(
          milliseconds: 800,
        ),
        curve: Curves.easeInOutSine,
        height: showBtmAppBr ? 70 : 0,
        child: BottomAppBar(
          notchMargin: 8.0,
          shape: const CircularNotchedRectangle(),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const HomePage()));
                },
                icon: const Icon(
                  Icons.home_outlined,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const RecipePage()));
                },
                icon: const Icon(
                  Icons.fastfood_outlined,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const BlogPage()));
                },
                icon: const Icon(
                  Icons.message,
                ),
              ),
              IconButton(
                onPressed: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const contact()));
                },
                icon: const Icon(
                  Icons.contact_phone,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
