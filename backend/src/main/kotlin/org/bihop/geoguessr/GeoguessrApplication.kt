package org.bihop.geoguessr

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GeoguessrApplication

fun main(args: Array<String>) {
	runApplication<GeoguessrApplication>(*args)
}
