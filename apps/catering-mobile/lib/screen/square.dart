import 'package:flutter/material.dart';

class MySquare extends StatelessWidget {
  final child;
  MySquare({required this.child});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 8),
        height: 200,
        decoration: BoxDecoration(
            color: Color.fromARGB(255, 55, 175, 166),
            borderRadius: BorderRadius.circular(6)),
        child: Center(
          child: Text(child, style: TextStyle(fontSize: 25)),
        ),
      ),
    );
  }
}
