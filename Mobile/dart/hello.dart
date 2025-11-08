import 'dart:io';
import 'dart:async';

void main() {
  StreamController streamController = StreamController();
  Stream stream = streamController.stream;

  StreamSubscription streamSubscription = stream.listen((val) {
    print("Data received: $val");
  });
}

// Type Of Stream
// There are two types of streams in Dart:
// 1. Single Subscription Stream: 
//  This type of stream allows only a single listener to listen
//    to the stream. Once a listener is attached, no other listener can be added.

// 2. Broadcast Stream: 
//This type of stream allows multiple listeners to listen to the stream
//    simultaneously. It is useful for scenarios where you want to broadcast events to multiple
//    listeners.
// Example of Single Subscription Stream
